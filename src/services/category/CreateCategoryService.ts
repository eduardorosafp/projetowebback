import prismClient from "../../prisma";



interface categoryRequest{
    name: string;
}


class CreateCategoryService{
    async execute({name}){

        if(name === ''){
            throw new Error('Name invalid')
        }

        const category = await prismClient.category.create({
            data:{
                name: name,
            },
            select:{
               id: true,
               name: true, 
            }
        })

        return category;
    }
}

export { CreateCategoryService}