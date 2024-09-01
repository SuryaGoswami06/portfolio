import React, { useEffect ,useState} from 'react'
import { useParams } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';
import CodeSnippet from './CodeSnippet';

function Article(){
    const {slug} = useParams();
    const [data,setData] = useState("")
   useEffect(()=>{
     fetch(`/content/blog/${slug}.md`)
     .then(res=>res.text())
     .then(res=>setData(res))
   },[slug])
   return(
    <article className='max-w-[700px] mx-auto prose'>
      { data && <Markdown
       options={{
        overrides:{
            Code:{
                component:CodeSnippet
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