import DeletePostbutton from './DeletePostbutton'

export default function Post({id, title, content, authorName}){
    return (
        <div style={{
            border: '1px solid white',
            margin: '10px',
            padding: '10px'
        }}>
            
            <>{title}</>
            <p>{content}</p>
            <p>By {authorName}</p>
            <DeletePostbutton id={id}/>
        </div>
    );
}