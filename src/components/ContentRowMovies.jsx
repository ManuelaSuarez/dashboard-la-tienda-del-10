import SmallCard from "./SmallCard";

function ContentRowMovies() {
    const sidebarStyle = {
        background: '#63bbf2'
    };
    return (
        <div className="row">

            {/* <!-- Movies in Data Base --> */}
            <SmallCard title="Productos" color="primary" quantity={21} icon="fa-tshirt" />

            {/* <!-- Actors quantity --> */}
            <SmallCard title="Usuarios" color="warning" quantity={49} icon="fa-user" />
        </div>
    );
}

export default ContentRowMovies;