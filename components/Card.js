const Card = ({cards}) => {
    return (
        <div className={'grid grid-cols-4 gap-4 mt-4 w-[50%] mx-auto'}>

            {cards.map(card => (<div key={card.id} className={''}>
                    <div className={''}><img className={'h-[150px] mb-1'} src={card.src} alt={'photo front side'}/></div>
                    <div><img src={'./img/cover.png'} className={'h-[150px]'} alt={'photo back side'}/>
                    </div>
                </div>

            ))}
        </div>

    )
}

export default Card