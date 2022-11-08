const Content = ({title, text, placeholder, button, type}) => {
    return(
        <div className="content">
            <div className="title">{title}</div>
            <div className="text">{text}</div>
            <div className="inputContainer">
                <input type={type} className="input" placeholder={placeholder}/>
                <button className="button">{button}</button>
            </div>
        </div>
    )

}

export default Content 