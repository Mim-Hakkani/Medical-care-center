import React from 'react';
import Gallery from 'react-photo-gallery';

export default class Sample extends React.Component {
    render() {
	return (
        <div className="py-2 my-5">
            <Gallery className="g-img" photos={PHOTO_SET} />
        </div>
	 
	);
    }
}
const PHOTO_SET = [
  {
    src: 'https://www.independent.ie/irish-news/education/671f1/40328133.ece/AUTOCROP/w620/A%20young%20caring%20doctor',
    width: 6,
    height: 6
  },
  {
    src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9jdG9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    width: 3,
    height: 2
  },
  {
    src: 'https://media.istockphoto.com/photos/portrait-of-middle-aged-asian-female-doctor-standing-in-hospital-picture-id1271328839?b=1&k=20&m=1271328839&s=170667a&w=0&h=SIMzwoe8eu43OoY4M3ElZCMxW9MgDbZbVzMhh4VY2zM=',
    width: 4,
    height: 2
  },
  {
    src: 'https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop',
    width: 8,
    height: 2
  },
  {
    src: 'https://static.langimg.com/thumb/msid-82657796,imgsize-95303,width-700,height-525,resizemode-75/ei-samay.jpg',
    width: 4,
    height: 2
  },
  {
    src: 'https://bengali.cdn.zeenews.com/bengali/sites/default/files/styles/zm_700x400/public/2016/06/01/56610-prescriptionsign.jpg?itok=qwBGGTfP',
    width: 5,
    height: 4
  }
];
