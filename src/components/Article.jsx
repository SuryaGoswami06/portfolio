import React, { useEffect ,useState} from 'react'
import { useParams } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';
import CodeSnippet from './CodeSnippet';
import ResizableImage from './ResizableImage';

function Article(){

    const {slug} = useParams();
    const [data,setData] = useState("")
    const [error,setError]=useState('')

   useEffect(()=>{
     fetch(`/content/blog/${slug}.md`)
     .then(res=>res.text())
     .then(res=>{
       if(res.startsWith('<!doctype html>')){
         throw new Error('there is no article')
       }else{
        setData(res)
       }
     })
     .catch(err=>setError(err))
   },[slug]);

   if(error){
    return(
      <div className='flex justify-center items-center h-[80vh] text-2xl capitalize '>{error.message} about: {slug}</div>
    )
   }

   return(
    <article className='max-w-[700px] mx-auto prose'>
      { data && <Markdown
       options={{
        overrides:{
            Code:{
                component:CodeSnippet
            },
            ResizeImage:{
              component:ResizableImage,
            }
          }
        }}
       >
            {data}
        </Markdown>
        }
    </article>
   )
}
export default Article;