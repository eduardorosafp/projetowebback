import prismClient from "../../prisma";

class ListCategoryService{
    async execute(){

        const category = await prismClient.category.findMany({
            select:{
                id:true,
                name:true,
            }
        })

        return category;
    }
}

export {ListCategoryService}