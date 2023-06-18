import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { FaInfoCircle, FaPlay } from "react-icons/fa";

const MediaCard = (props) => {
  return (
    <Card className="p-4 bg-slate-600 rounded-md w-56 h-full hover:scale-95 ">
      <CardBody>
        <Image
          className="rounded "
          src={`https://image.tmdb.org/t/p/original/${
            props.poster_path || props.backdrop_path
          }`}
          alt={props?.name || props?.original_name || props?.title}
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading className="text-2xl max-sm:text-l font-bold">
            {props?.name || props?.original_name || props?.title}
          </Heading>
          <Text className="text-md mt-2">
            {props.overview.length > 60
              ? props.overview.substring(0, 60) + "..."
              : props.overview}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter></CardFooter>
    </Card>
  );
};

export default MediaCard;
