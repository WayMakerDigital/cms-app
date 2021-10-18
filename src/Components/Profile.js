import React, { Component } from 'react';

function Profile() {

    const viewAll = (event) => {
        document.querySelector('#profile').style.display = 'none';
        document.querySelector('#all').style.display = 'inline-block';
    }

    const proSect = {

        width: '30%',
        height: '100%',
        justifyContent: 'center',
        borderRadius: '7px',
        backgroundColor: 'white',
        margin: '20px',
        marginRight: '50px',
        padding: '20px',
    }
    
    const image = {
        justifyContent: 'center',
    }

    const mainContent = {
        width: '65%',
        margin: '10px',
        lineHeight: '1.4'
    }

    const otherBlogs = {
        width: '50%',
        margin: '10px',
        display: 'flex',
    }

    const blogSnippet = {
        borderRadius: '7px',
        backgroundColor: 'white',
        marginRight: '20px',
        marginTop: '20px',
        padding: '10px',
        height: '150px'
    }

    const mainParas = {
        fontSize: '18px',
    }

    return(
        <div id='profile' style={{display: 'flex'}}>
            <div style={proSect}>
                {/* <img src='https://via.placeholder.com/150' style={image} /> */}
                <p>Author: Adam Hilton</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis rhoncus dui ut semper. Morbi suscipit mollis arcu vitae sollicitudin.</p>
                <button onClick={viewAll}>press</button>
            </div>
            <div>
                <div style={mainContent}>
                    {/* <h1>Main Heading</h1>
                    <p style={{mainParas}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis rhoncus dui ut semper. Morbi suscipit mollis arcu vitae sollicitudin. Vestibulum vehicula et lectus id varius. Sed ut pretium odio, nec convallis tellus. Nullam id dui turpis. Integer suscipit in arcu non laoreet. In sit amet aliquam urna. Donec varius eros nec orci fringilla iaculis. Vestibulum dignissim purus et consectetur congue. Donec at efficitur velit.</p>
                    <p style={{mainParas}}>Ut elit enim, bibendum in lacinia ut, imperdiet nec nunc. Aliquam blandit a enim vehicula ornare. Etiam rutrum, nunc in commodo vulputate, dui velit egestas risus, vel maximus risus lacus vel est. Phasellus in efficitur urna. Donec mattis feugiat tempor. Aenean sit amet lorem vitae dui mollis eleifend a vitae massa. Aenean auctor bibendum libero, ac laoreet urna varius non. Curabitur suscipit convallis mauris, at consectetur nisl convallis sed. Vestibulum sed massa ex. Proin molestie commodo vestibulum. Curabitur at mauris aliquam, euismod arcu et, mollis eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer venenatis efficitur lorem ut porta. Nullam vitae hendrerit ante, vitae scelerisque mauris.</p>
                    <h2>Sub-heading</h2>
                    <p style={{mainParas}}>Ut sed augue varius, porta neque sed, molestie nibh. Cras sed enim sem. Duis eros nulla, mollis sit amet varius vel, fringilla eu augue. In vitae turpis venenatis, egestas nulla a, lacinia lacus. Suspendisse leo felis, sollicitudin ac ullamcorper sed, pretium ut justo. Morbi sit amet urna a quam iaculis vulputate. Maecenas lacinia vel velit in tincidunt. Sed tincidunt aliquam sem, et scelerisque odio imperdiet sit amet. Suspendisse blandit rutrum sapien, nec malesuada turpis mollis ut. Donec ac nibh non lectus tempus accumsan dictum eget lorem. Nunc faucibus, enim ut rutrum luctus, nisl neque ullamcorper sem, eu hendrerit mauris mi a ante. Nulla velit enim, facilisis id fermentum eu, rutrum vel leo.</p>
                    <p style={{mainParas}}>Nam egestas nunc in dolor suscipit interdum. Fusce eget consectetur dolor. Morbi ut augue est. Nam id imperdiet nisi. Maecenas eget mi eget urna ultrices venenatis eget non turpis. Ut scelerisque velit non ex bibendum, blandit vestibulum lacus suscipit. Curabitur imperdiet turpis non massa fringilla aliquet. Nulla ultricies pellentesque lorem non pretium. Nullam eget libero nisl. Praesent at tellus nec urna mollis tempor nec ac leo. Integer feugiat ornare sem, vitae tempus ex porta sit amet.</p>
                    <h2>Sub-heading</h2>
                    <p style={{mainParas}}>Vivamus tortor velit, aliquet a nunc et, efficitur dapibus quam. Integer commodo, urna eu cursus fermentum, diam tortor interdum tellus, vitae scelerisque libero est ac mi. Etiam ex est, dignissim a commodo faucibus, congue eu metus. Donec non est egestas, volutpat purus id, rhoncus magna. Nullam sed lacus arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec rhoncus augue eu odio blandit, et posuere orci fringilla. Cras maximus, massa condimentum mattis ullamcorper, tellus sem egestas sem, nec euismod nisi nisl in diam. Quisque ornare ultrices congue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed eu iaculis lacus. Etiam vitae nisi leo. Maecenas nibh sem, porttitor ut odio at, aliquet interdum arcu.</p> */}
                </div>
                <div style={otherBlogs}>
                    <div style={blogSnippet}>
                        <p>Title of blog post</p>
                        <p>Small summary of Blog post</p>
                    </div>
                    <div style={blogSnippet}>
                        <p>Title of blog post</p>
                        <p>Small summary of Blog post</p>
                    </div>
                    <div style={blogSnippet}>
                        <p>Title of blog post</p>
                        <p>Small summary of Blog post</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;