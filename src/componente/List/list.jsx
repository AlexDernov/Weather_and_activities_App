import "./List.css";

export function List ({activities}){

    return(
        <ul className="list">
            {activities.map((activity)=>(
            <li className="list_item" key={activity.id}>{activity.name}
            <button>
            </button>
            </li>))}
        </ul>
    )
}