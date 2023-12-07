import {QueryClient, useQuery, useQueryClient} from '@tanstack/react-query'
import { getParagraphs } from './services/apiParagraphs'

export function useParagraphs(index) {
    const queryClient = useQueryClient()
    const {
        isLoading,
        data: {data:paragraphs, count} = {},
        error
    } = useQuery({
        queryKey:['content', index],
        queryFn:()=>getParagraphs({index})
    })

    return ({isLoading, error, paragraphs, count })

}