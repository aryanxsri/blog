import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { decode,sign, verify } from 'hono/jwt'
import {signupinput} from "../../../common/index"



export const userRouter = new Hono<{
    Bindings: {
      DATABASE_URL: string;
      JWT_SECRET:string
    }
  }>()


userRouter.post('/signup', async (c) => {
    const body = await c.req.json()

    const {success}=signupinput.safeParse(body)
    if(!success){
      c.status(411)
      return c.json({
        message:"Input not correct"
      })
    }

    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
  
    try {
      const user=await prisma.user.create({
        data: {
          email: body.email,
          password: body.password,
          name: body.name
        }
      })
      console.log("User created",user)

      const jwt=await sign({
        id:user.id
      },c.env.JWT_SECRET)
      console.log("JWT generateed",jwt)

      return c.text(jwt)
    } catch (e) {
      
      console.error("error in signup route",e)
      c.status(500)
      return c.text("invalid")
    }
  })
  userRouter.post('/signin', async (c) => {
  
    const body = await c.req.json()
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
  
    try {
      const user=await prisma.user.findFirst({
        where: {
          email: body.email,
          password: body.password
        }
      })
      if(!user){
        c.status(403)
        return c.json({
          message:"Incorrect credentials"
        })
      }
      const jwt=await sign({
        id:user.id
      },c.env.JWT_SECRET)
      return c.text(jwt)
    } catch (e) {
      c.status(411)  
      return c.text("invalid")
    }
  })