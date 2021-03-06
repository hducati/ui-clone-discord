import React, { useRef, useEffect } from 'react';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';
import ChannelMessage, { Mention } from '../ChannelMessage';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div !== null) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef])

  return (
    <Container>
      <Messages ref={messagesRef}>
        <ChannelMessage
          author="Henrique Ducati"
          date="21/07/2020"
          content="Meu dia de aniversário"
        />

        <ChannelMessage
          author="Michel Stefani"
          date="21/07/2020"
          content={
            <>
              <Mention>@Henrique Ducati</Mention>, seu lindo!!
            </>
          }
          
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre"/>
        <InputIcon/>
      </InputWrapper>
    </Container>
  );
}

export default ChannelData;