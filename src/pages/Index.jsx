import React, { useEffect, useState } from "react";
import { ChakraProvider, Container, Tabs, TabList, TabPanels, Tab, TabPanel, Box, Heading, Text, VStack, HStack, Link, IconButton, Spinner } from "@chakra-ui/react";
import { FaHome, FaVideo, FaBook, FaLifeRing } from "react-icons/fa";

const Index = () => {
  const [dashboards, setDashboards] = useState([]);
  const [glossary, setGlossary] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch dashboards and glossary from OpenMetadata API
    const fetchData = async () => {
      try {
        const dashboardResponse = await fetch("https://api.openmetadata.acme-corp.com/dashboards", {
          headers: {
            Authorization: "Bearer 12345-abcde",
          },
        });
        const glossaryResponse = await fetch("https://api.openmetadata.acme-corp.com/glossary", {
          headers: {
            Authorization: "Bearer 12345-abcde",
          },
        });

        const dashboardsData = await dashboardResponse.json();
        const glossaryData = await glossaryResponse.json();

        setDashboards(dashboardsData);
        setGlossary(glossaryData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <Container centerContent>
        <Spinner size="xl" />
      </Container>
    );
  }

  return (
    <ChakraProvider>
      <Container maxW="container.xl" py={4} bg="white">
        <Tabs variant="soft-rounded" colorScheme="green">
          <TabList>
            <Tab>
              <FaHome /> Home
            </Tab>
            <Tab>
              <FaVideo /> Training Videos
            </Tab>
            <Tab>
              <FaBook /> Glossary
            </Tab>
            <Tab>
              <FaLifeRing /> Support
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Heading as="h2" size="xl" mb={4}>
                Dashboards
              </Heading>
              <VStack spacing={4}>
                {dashboards.map((dashboard) => (
                  <Box key={dashboard.id} p={4} borderWidth="1px" borderRadius="lg" w="100%" bg="yellow">
                    <Heading as="h3" size="md">
                      {dashboard.title}
                    </Heading>
                    <Text>{dashboard.description}</Text>
                    <Text color="gray">Last Updated: {dashboard.lastUpdated}</Text>
                    <Text color="gray">Owner: {dashboard.owner}</Text>
                    <Text color="gray">Top Used Fields: {dashboard.topUsedFields.join(", ")}</Text>
                    <Link href={dashboard.reportLink} color="green" isExternal>
                      View Report
                    </Link>
                  </Box>
                ))}
              </VStack>
            </TabPanel>

            <TabPanel>
              <Heading as="h2" size="xl" mb={4}>
                Training Videos
              </Heading>
              <VStack spacing={4}>
                {/* Placeholder for training videos */}
                <Box p={4} borderWidth="1px" borderRadius="lg" w="100%">
                  <Heading as="h3" size="md">
                    Video Title
                  </Heading>
                  <Text>Description of the video.</Text>
                  <Text>Duration: 10 mins</Text>
                </Box>
              </VStack>
            </TabPanel>

            <TabPanel>
              <Heading as="h2" size="xl" mb={4}>
                Glossary
              </Heading>
              <VStack spacing={4}>
                {glossary.map((term) => (
                  <Box key={term.id} p={4} borderWidth="1px" borderRadius="lg" w="100%">
                    <Heading as="h3" size="md">
                      {term.term}
                    </Heading>
                    <Text>{term.definition}</Text>
                    <Text>Category: {term.category}</Text>
                  </Box>
                ))}
              </VStack>
            </TabPanel>

            <TabPanel>
              <Heading as="h2" size="xl" mb={4}>
                Support
              </Heading>
              <VStack spacing={4}>
                <HStack>
                  <Link href="https://help.acme-corp.com" isExternal>
                    Help Center
                  </Link>
                  <Link href="mailto:support@acme-corp.com">Contact Us</Link>
                </HStack>
                <Text>For any issues, please reach out to our support team at support@acme-corp.com.</Text>
              </VStack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </ChakraProvider>
  );
};

export default Index;
