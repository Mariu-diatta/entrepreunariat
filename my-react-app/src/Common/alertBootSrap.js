import Alert from 'react-bootstrap/Alert';

function AlertBootstrap() {
  return (
    <>
        <Alert variant={'success'}>
          Vous avez validé votr commande avec succès.
          <Alert.Link href="#">  information commande</Alert.Link>
        </Alert>
    </>
  );
}

export default AlertBootstrap;