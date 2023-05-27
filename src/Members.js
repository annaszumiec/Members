import React from "react";


const Members = ({ members, deleteMember }) => {

    // CONDITIONAL STATEMENT

    //------ 1  first way if

    // const memberList = members.map(member => {
    //     if (member.age > 20) {
    //         return (
    //             <div className="members" key={member.id}>
    //                 <div> Name: {member.name} </div>
    //                 <div> Age: {member.age} </div>
    //                 <div> Level: {member.level} </div>
    //             </div>
    //         )
    //     } else {
    //         return null
    //     }
    // })


    //------2    second way direct in dynamic props------

    //     return (
    //         <div className="members-list">
    //             {
    //                 members.map(member => {
    //                     return member.age > 20 ? (
    //                         <div className="members" key={member.id}>
    //                             <div> Name: {member.name} </div>
    //                             <div> Age: {member.age} </div>
    //                             <div> Level: {member.level} </div>
    //                         </div>
    //                     ) : null;
    //                 })
    //             }
    //         </div>

    //     )
    // }

    //------3  thisrd way


    const memberList = members.map(member => {
        return member.age > 20 ? (
            <div className="members" key={member.id}>
                <div> Name: {member.name} </div>
                <div> Age: {member.age} </div>
                <div> Level: {member.level} </div>
                <button onClick={() => { deleteMember(member.id) }}>Delete Member</button>

            </div>
        ) : null;
    })

    return (
        <div className="members-list">
            {memberList}
        </div>

    )
}

export default Members;