import NoticeItem from './NoticeItem'

const NoticeList = ({notices, deleteNotice}) => {
    if (!notices.length) {
        return (
            <div>No notes available</div>
        )
    }

    return (
        <div>
            {notices.map(notice => (
                <NoticeItem key={notice.id} data={notice} deleteNotice={deleteNotice}/>
            ))}
        </div>
    )
}


export default NoticeList