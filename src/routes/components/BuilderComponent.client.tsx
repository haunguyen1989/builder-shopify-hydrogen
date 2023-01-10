// Do stuff here
import {BuilderComponent, builder, Builder} from '@builder.io/react';
const Heading = props => (
    <h1>{props.title}</h1>
)
builder.init('8141715a0ca14a24a7ec39204b570b0e');

// Add custom components
//
// Builder.registerComponent(Welcome, {
//   name: 'Welcome',
// });
Builder.registerComponent(Heading, {
    name: 'Heading',
    inputs: [{ name: 'title', type: 'text' }],
    image: 'https://tabler-icons.io/static/tabler-icons/icons-png/3d-cube-sphere-off.png'
})

export default BuilderComponent;
