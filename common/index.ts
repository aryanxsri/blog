import z from "zod"

export const signupinput=z.object({
    email:z.string().email(),
    password:z.string().min(6),
    name:z.string().optional()
  })

  export type SignupInput=z.infer<typeof signupinput>



  export const signininput=z.object({
    username:z.string().email(),
    password:z.string().min(6),
    name:z.string().optional()
  })

  export type SigninInput=z.infer<typeof signininput>
  


  export const createbloginput=z.object({
    title:z.string(),
    content:z.string(),
  })

  export type CreateblogInput=z.infer<typeof createbloginput>


  export const updatebloginput=z.object({
    title:z.string(),
    content:z.string(),
    id:z.number()
  })

  export type UpdateblogInput=z.infer<typeof updatebloginput>
