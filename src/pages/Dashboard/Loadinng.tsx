import { Box, Skeleton, SkeletonProps } from "@chakra-ui/react";

interface ChakraSkeleton extends SkeletonProps {
  repeatCount: number;
}

const Loading = ({ repeatCount, ...rest }: ChakraSkeleton) => {
  const howMany = Array.from(Array(repeatCount).keys());
  return (
    <>
      {howMany.map((_, index) => (
        <Skeleton
          speed={1}
          startColor="gray.100"
          endColor="gray.200"
          {...rest}
          key={index}
        >
          <Box w="300px" h="200px" padding="7" />
        </Skeleton>
      ))}
    </>
  );
};

export default Loading;
