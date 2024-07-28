import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'


export const blogRouter=new Hono<{
    Bindings: {
        DATABASE_URL: string
        JWT_SECRET: string
      },
      Variables:{
        userId: string
      }
}>()

//MIDDLEWARE- for checking 
blogRouter.use("/*", async(c,next)=>{
    const authHeader=c.req.header("authorization")
    const user=await verify(authHeader|| "", c.env.JWT_SECRET)
    if(user)
    {
        c.set("userId",user.id as string)
        await next()
    }
    else{
        c.status(403)
        return c.json({
            message:"you are not logged in"
        })
    }
})

//Route for creating a blog
blogRouter.post('/', async (c) => {

    const body=await c.req.json()
    const authorId=c.get("userId")
    const prisma= new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const blog=await prisma.post.create({
        data:{
            title:body.title,
            content:body.content,
            authorId:authorId
        }
    })

    return c.json({
        id:blog.id
    })
  })
  

  //route for updating the blog
  blogRouter.put('/', async(c) => {
    const authorId = c.get('userId');
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

	const body = await c.req.json();
	const blog=prisma.post.update({
		where: {
			id: body.id
		},
		data: {
			title: body.title,
			content: body.content
		}
	});

	return c.text('updated post');
  })
  

//route for getting a blog
  blogRouter.get('/', async(c) => {
    const body=await c.req.json()
    //const id = c.req.param('id');
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());
	try{
        const post = await prisma.post.findUnique({
            where: {
                id:body.id
            }
        })
        return c.json({
            post
        })
    }catch (e)
    {
        c.status(411)
        return c.json({
            message:"error while fetching blog post"
        })
    }
  })
  

  //route for displaying all the blogs
  blogRouter.get('/bulk', async(c) => {
    const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());
	
	const posts = await prisma.post.findMany({});

	return c.json(posts);
  })