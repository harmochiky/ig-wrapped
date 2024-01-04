import React from "react";
import WrappedContainer, { WrappedSlideProps } from "../WrappedContainer";
import FatHeading from "../FatHeading";
import InfoText from "../InfoText";
import CountUp from "react-countup";
import HideForTime from "../HideForTime";
import lookup from "@/lib/utils/lookup";

const comment = {
  0: "More the quiet type, huh?",
  10: "You're not much of a talker, are you?",
  50: "Definately getting your word out there sometimes",
  100: "You're a social butterfly!",
  300: "Got a lot to say, huh?",
  500: "What a chatterbox!",
};

function Comments({ statistics }: WrappedSlideProps) {
  return (
    <WrappedContainer bg="bg-zinc-900" text="text-starship-400">
      <InfoText className="!text-zinc-200 animate-in slide-in-from-bottom fade-in duration-1000">
        You wrote
      </InfoText>
      <FatHeading className="animate-in slide-in-from-bottom fade-in duration-1000">
        <CountUp end={statistics.activity.commentsWritten} duration={2} />
        <br />
        comments
      </FatHeading>
      <HideForTime time={700}>
        <InfoText className="!text-zinc-200 animate-in slide-in-from-bottom fade-in duration-1000 delay-700">
          {lookup(statistics.activity.commentsWritten, comment)}
        </InfoText>
      </HideForTime>
    </WrappedContainer>
  );
}

export default Comments;
