import Content from "./Content.jsx";
import Sidebar from "./Sidebar.jsx";

const Body = ({user, stats}) => {
    return (
        <div className={'body'}>
            <Sidebar user={user} stats={stats}/>
            <Content/>
        </div>
    )
}

export default Body;