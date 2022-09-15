const AvatarJsx = ({ name, id, desc }) => {
    // console.log(props)
    // const { name: nombre, id, desc } = props
    const src = `https://randomuser.me/api/portraits/lego/${id}.jpg`

    return (
        <picture>
            <img src={src} alt={name}/>
            {name}
            {desc}
        </picture>
    )
}

export default AvatarJsx