class Data
{

    constructor(file)
    {
        this.folder = "./resources/data";
        this.file = `${this.folder}/${file}.json`;
    }

    async find(id, targets)
    {

        const _data = await fetch(this.file);
        const data = await _data.json();
        let data_map = new Map(Object.entries(data.cucumbers));
        let data_array = [];

        for (let i = 0; i < 4; i++)
        {
            let __data =  data_map.get(id);
            data_array[i] = __data[targets[i]];
        }


        return data_array;
    }
}