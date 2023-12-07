import React from 'react'

const processdef = [
    {
        heading:'Acquaintance',
        paragraph:'Through call or meeting to know each other better aiming a productive collaboration.'
    },
    {
        heading:'Briefing',
        paragraph:'Through call or meeting to know each other better aiming a productive collaboration.'
    },
    {
        heading:'Shooting',
        paragraph:'Through call or meeting to know each other better aiming a productive collaboration.'
    },
    {
        heading:'Delivery',
        paragraph:'Through call or meeting to know each other better aiming a productive collaboration.'
    }
]



function ProcessTimeline({process={}}) {

  if (Object.keys(process).length === 0) {
    process=processdef
  }

  return (
    <div style={{display:'flex', backgroundColor:'#FFF9EA', gap:'3rem', fontSize:'0.8rem', padding:'1.4rem 1rem'}}>
   {
     process.map((item, index)=>{
        return (
        <div key={`process-${index}`}>
        <div style={{display:'flex', gap:'0.3rem', color:"#FFC700", alignItems:'center'}}>
            <p style={{
                fontWeight:'700',
                margin:'0'
            }}>{`0${index+1}`}</p>
            <div style={{borderTop:'1px solid #FFC700', width:'2.25rem', margin:'0'}}></div>
        </div>
        <h3 style={{margin:'0'}}>{item.heading}</h3>
        <p style={{margin:'0'}}>{item.paragraph}</p>
        </div>)
     })
   }
    
    </div>
  )
}

export default ProcessTimeline