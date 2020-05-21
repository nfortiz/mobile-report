import React, { useRef, useEffect } from 'react'
import Highlight from 'react-highlight'
import { Container, Row, Column } from '../../styles/grid'
import { Card, CardTitle, CardContent } from '../../styles/card'

export default function () {
  const elm = useRef(null)

  useEffect(() => {
    console.log(elm.current)
    if (elm.current) {
      console.log(hljs.highlight)
      // hljs.highlight('dart', elm.current)
    }
  }, [elm])

  const codeExample = `Future<void> initCommunication({bool unsuspend = false}) async {
    // Code ..
    try {
      var packageInfo = await PackageInfo.fromPlatform();

      _isConnecting = true;
      suspended = false;
      // En esta se hace uso de web_sockets para acceder a la API
      _channel = new IOWebSocketChannel
                      .connect(_SERVER_ADDRESS,
                               headers: {
                                'X-Client-Version': packageInfo.buildNumber
                               });
      log.d("Connected to service");
      _isConnecting = false;
      _isConnected = true;
      // En esta linea se hace uso del patron publicador/subscriptor con la libreria event_taxi
      // Si logra conectarse a la API se lanza el evento de conectado
      EventTaxiImpl.singleton().fire(ConnStatusEvent(status: ConnectionStatus.CONNECTED));
      _channel.stream.listen(_onMessageReceived, onDone: connectionClosed, onError: connectionClosedError);
    } catch(e){
      log.e("Error from service \${e.toString()}", e);
      _isConnected = false;
      _isConnecting = false;
      // En caso de error lanza un evento de desconectado
      EventTaxiImpl.singleton().fire(ConnStatusEvent(status: ConnectionStatus.DISCONNECTED));
    }
  }`

  return (
    <section id='performance'>
      <Container>
        <Row>
          <Column>
            <h2>Conectividad Eventual</h2>
            <Card>
              <CardContent>
                <p>
                Principales librerías usadas por Natrium para el manejo de conectividad, conexión externa y almacenamiento de información en local.
                Desatacan:
                  <ul>
                    <li>sqflite: para el manejo de SQLite para flutter. </li>
                    <li>http: Como cliente http y consumir de forma fácil recursos http. </li>
                    <li>web_socket_channel: Provee de empaquetadores de StreamChannels para conexiones con web sockets. </li>
                  </ul>

                </p>
                <p>
                  Sin embargo, no hay un buen manejo de la conectividad eventual ya que no se detectan cambios de conectividad. Y solo se hace una comprobación de conectividad cuando se intenta conectar a la API de Natrium.
                </p>
              </CardContent>
            </Card>
          </Column>
          <Column>
            <p>
            La funcionalidad de la librería http es servir como cliente HTTP, el de la librería event_taxi para la implementación del patrón publicador/subscriptor y el de la libreira web_sockets manejo de conexiones web sockets.
             A partir de esto, en el archivo lib/network/account_service.dart podemos encontrar un ejemplo del uso de estas librerías
            </p>
            <Highlight className='language-dart'>
              {codeExample}
            </Highlight>
          </Column>
        </Row>
      </Container>
    </section>
  )
}
