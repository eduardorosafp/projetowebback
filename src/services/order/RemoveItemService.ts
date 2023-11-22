import prismClient from "../../prisma";


interface ItemReq{
    item_id: string;
}
class RemoveItemService{
    async execute({item_id}: ItemReq){

        const order = await prismClient.item.delete({
            where:{
                id: item_id
            }
        })

        return order; 
    }
}
export { RemoveItemService} 