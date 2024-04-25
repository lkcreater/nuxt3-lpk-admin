import Model from "@/server/models";

export default defineEventHandler( async (event) => {
    const connect = await Model();
    console.log(event.req);

    return {
        api: 'sssdd'
    }
})