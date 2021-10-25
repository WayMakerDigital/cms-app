import './Styles/Profile.css'

function SinglePostView() {

    var title = 'How We Made a CMS App in Less Than a Month that actually *kinda* works!';
    var readTime = '<2 Minute Read';
    var sh1 = 'The Process';
    var sh2 = 'Any Issues we Faced';
    var sh3 = ' In Conclusion';
    
    return (
        <div className = 'contentContainer'>
            <h1 className='blogTitle'>{title}</h1>
            <h6>{readTime}</h6>
            <p className="mainParagraphs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis rhoncus dui ut semper. Morbi suscipit mollis arcu vitae sollicitudin.
            Vestibulum vehicula et lectus id varius. Sed ut pretium odio, nec convallis tellus. Nullam id dui turpis. Integer suscipit in arcu non laoreet.
            In sit amet aliquam urna. Donec varius eros nec orci fringilla iaculis. Vestibulum dignissim purus et consectetur congue. Donec at efficitur velit. 
            Ut elit enim, bibendum in lacinia ut, imperdiet nec nunc. Aliquam blandit a enim vehicula ornare. 
            </p>
            <h2>{sh1}</h2>
            <p className="mainParagraphs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis rhoncus dui ut semper. Morbi suscipit mollis arcu vitae sollicitudin.
            Vestibulum vehicula et lectus id varius. Sed ut pretium odio, nec convallis tellus. Nullam id dui turpis. Integer suscipit in arcu non laoreet.
            In sit amet aliquam urna. Donec varius eros nec orci fringilla iaculis. Vestibulum dignissim purus et consectetur congue. Donec at efficitur velit. 
            Ut elit enim, bibendum in lacinia ut, imperdiet nec nunc. Aliquam blandit a enim vehicula ornare. Etiam rutrum, nunc in commodo vulputate, dui velit egestas risus, 
            vel maximus risus lacus vel est. Phasellus in efficitur urna. Donec mattis feugiat tempor. Aenean sit amet lorem vitae dui mollis eleifend a vitae massa. 
            Aenean auctor bibendum libero, ac laoreet urna varius non. Curabitur suscipit convallis mauris, at consectetur nisl convallis sed. Vestibulum sed massa ex. 
            Proin molestie commodo vestibulum. Curabitur at mauris aliquam, euismod arcu et, mollis eros. Pellentesque habitant morbi tristique senectus et netus et malesuada 
            fames ac turpis egestas. Integer venenatis efficitur lorem ut porta. Nullam vitae hendrerit ante, vitae scelerisque mauris.
            </p>
            <h2>{sh2}</h2>
            <p className="mainParagraphs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis rhoncus dui ut semper. Morbi suscipit mollis arcu vitae sollicitudin.
            Vestibulum vehicula et lectus id varius. Sed ut pretium odio, nec convallis tellus. Nullam id dui turpis. Integer suscipit in arcu non laoreet.
            In sit amet aliquam urna. Donec varius eros nec orci fringilla iaculis. Vestibulum dignissim purus et consectetur congue. Donec at efficitur velit. 
            Ut elit enim, bibendum in lacinia ut, imperdiet nec nunc. Aliquam blandit a enim vehicula ornare. 
            
            Etiam rutrum, nunc in commodo vulputate, dui velit egestas risus, 
            vel maximus risus lacus vel est. Phasellus in efficitur urna. Donec mattis feugiat tempor. Aenean sit amet lorem vitae dui mollis eleifend a vitae massa. 
            Aenean auctor bibendum libero, ac laoreet urna varius non. Curabitur suscipit convallis mauris, at consectetur nisl convallis sed. Vestibulum sed massa ex. 
            Proin molestie commodo vestibulum. Curabitur at mauris aliquam, euismod arcu et, mollis eros. 
            
            Pellentesque habitant morbi tristique senectus et netus et malesuada 
            fames ac turpis egestas. Integer venenatis efficitur lorem ut porta. Nullam vitae hendrerit ante, vitae scelerisque mauris.
            </p>
            <h2>{sh3}</h2>
            <p className="mainParagraphs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis rhoncus dui ut semper. Morbi suscipit mollis arcu vitae sollicitudin.
            Vestibulum vehicula et lectus id varius. Sed ut pretium odio, nec convallis tellus. Nullam id dui turpis. Integer suscipit in arcu non laoreet.
            In sit amet aliquam urna. Donec varius eros nec orci fringilla iaculis. Vestibulum dignissim purus et consectetur congue. Donec at efficitur velit. 
            Ut elit enim, bibendum in lacinia ut, imperdiet nec nunc. Aliquam blandit a enim vehicula ornare. Etiam rutrum, nunc in commodo vulputate, dui velit egestas risus, 
            vel maximus risus lacus vel est. Phasellus in efficitur urna. Donec mattis feugiat tempor. Aenean sit amet lorem vitae dui mollis eleifend a vitae massa. 
            Aenean auctor bibendum libero, ac laoreet urna varius non. 
            
            Curabitur suscipit convallis mauris, at consectetur nisl convallis sed. Vestibulum sed massa ex. 
            Proin molestie commodo vestibulum. Curabitur at mauris aliquam, euismod arcu et, mollis eros. Pellentesque habitant morbi tristique senectus et netus et malesuada 
            fames ac turpis egestas. Integer venenatis efficitur lorem ut porta. Nullam vitae hendrerit ante, vitae scelerisque mauris.
            </p>
        </div>
    )
};

export default SinglePostView;