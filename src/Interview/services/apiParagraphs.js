import supabase from './supabase'

export async function getParagraphs({index}) {

    console.log(index)

    let query = supabase.from("content").select("*")

    if (index > -1) {
        const from = index
        const to = index + 10
        query = query.range(from, to)
    }

    const {data, error, count} = await query

    if (error) {
        throw new Error("Data Fetching Error")
    }

    return {data, count}

}