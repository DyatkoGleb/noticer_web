import NoticeItem from './NoticeItem'

const NoticeList = ({notices}) => {
    if (!notices.length) {
        return (
            <div>No notes available</div>
        )
    }

    return (
        <div>
            {notices.map(notice => (
                <NoticeItem key={notice.id} data={notice} />
            ))}
        </div>
    )
}


export default NoticeList