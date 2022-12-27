import io from 'socket.io-client';
import { useCallback } from 'react';
import axios from 'axios';

const sockets: { [key: string]: SocketIOClient.Socket } = {};

const backUrl = 'http://localhost:3095';
const useSocket = (workspace?: string): [SocketIOClient.Socket | undefined, () => void] => {
  const disconnect = useCallback(() => {
    if (workspace) {
      sockets[workspace].disconnect();
      delete sockets[workspace];
    }
  }, []);

  if (!workspace) {
    return [undefined, disconnect];
  }
  if (!sockets[workspace]) {
    sockets[workspace] = io.connect(`${backUrl}/ws-${workspace}`, { transports: ['websocket'] });
  }
  //   sockets[workspace].emit('hello', 'world');
  //   sockets[workspace].on('message', (data) => {});
  //   sockets[workspace].on('onlineList', (data) => {});
  // hello란 key로 world라는 데이터를 보냄
  //   socket.emit('hello', 'world');

  //서버로 부터 데이터 받기
  //   socket.on('data', (data) => {
  //     console.log(data);
  //   });

  return [sockets[workspace], disconnect];
};

export default useSocket;
