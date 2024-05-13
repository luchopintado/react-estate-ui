import Filter from "../../components/filter/Filter";
import Map from "../../components/map/Map";
import Card from "../../components/card/Card";
import { listData } from "../../lib/dummydata";
import "./listPage.scss";


const data = listData;

function ListPage(){
  return (
    <div className="listPage">
        <div className="listContainer">
            <div className="wrapper">
              <Filter />

              {
                data.map((item) => {
                  return <Card key={`card-${item.id}`} item={item} />;
                })
              }
            </div>
        </div>
        <div className="mapContainer">
            <Map items={data} />
        </div>
    </div>
  )
}

export default ListPage;
