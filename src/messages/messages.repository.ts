import { readFile, writeFile } from "fs/promises";
export class MessageRepository {
    async findOne(id: string){
        const contents = await readFile('messages.json', 'utf8');
        const messages = JSON.parse(contents);
   
        return messages[id]
    }

    async findAll(){
        const contents = await readFile('messages.json', 'utf8');
        const messages = JSON.parse(contents);
        return messages

    }

    async create(content: string){
        const contents = await readFile('messages.json', 'utf8');
        const messages = JSON.parse(contents);
        const id = Math.floor((Math.random() * 9999))
        messages[id] = {
            content: content,
            id
        }
        await writeFile('messages.json', JSON.stringify(messages))
    }
}