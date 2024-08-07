import  Container  from "react-bootstrap/Container";
export const ItemsListContainer = (props) => (
<Container className="mt-4">
    <h6>{props.greeting}</h6>
</Container>
);