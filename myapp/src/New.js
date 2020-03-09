import React from 'react';

const New = (props) => {
    const ninjas = props.ninjas;
    const deleteNinja = props.deleteNinja;
    console.log(ninjas);
    const ninjaList = ninjas.map(ninja => {
        if (ninja.age > 22) {
            return (
                <div className="ninja" key={ninja.id}>
                    <div>Name : {ninja.name}</div>
                    <div> Age : {ninja.age}</div>

                    <button onClick={()=>{deleteNinja(ninja.id)}}> Delete </button>
                </div>
            )
        } else {
            return null;
        }
    });

    return (
        <div className="Ninja-list">
            {ninjaList}
        </div>
    )
};


export default New;