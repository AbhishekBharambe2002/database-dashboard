import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Checkbox,
  Button,
  Input,
  IconButton,
  Select,
  Badge,
  Divider,
  Stack,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const Dashboard = () => {
  const users = [
    {
      id: "ABC001",
      activityOrEmployeeStatus: "Active",
      additionalNumber: null,
      bloodGroup: "A+",
      dateOfBirth: "1985-03-01T00:00:00.000Z",
      education: "MSc",
      educationStatus: "Completed",
      email: "eleonoral23@prototype.com",
      firstNameOfTheMember: "Eleonóra Kovácsné",
      fullNameOfTheFamilyHead: "Vagner Tom Kovács",
      hobbies: "Reading, Gardening",
      maritalStatus: "Married",
      mobileOrWhatsappNumber: 2012367452,
      residentialAddress: "1234 Elm Street, Budapest, Hungary",
      state: "Budapest",
      villageName: "N/A",
      assignedTo: "Vagner Tom",
      date: "01/15/22",
      leadTime: "8 days",
      type: "R",
      status: "Open",
    },
    {
      id: "ABC002",
      activityOrEmployeeStatus: "Inactive",
      additionalNumber: 123456789,
      bloodGroup: "B-",
      dateOfBirth: "1978-11-22T00:00:00.000Z",
      education: "BSc",
      educationStatus: "In Progress",
      email: "anderson_johannesburg@prototype.com",
      firstNameOfTheMember: "Johannesburgi Anderson",
      fullNameOfTheFamilyHead: " Barnabás Eldő",
      hobbies: "Cycling, Painting",
      maritalStatus: "Single",
      mobileOrWhatsappNumber: 9876543210,
      residentialAddress: "5678 Oak Avenue, Johannesburg, South Africa",
      state: "Gauteng",
      villageName: "N/A",
      assignedTo: " Barnabás Eldő",
      date: "01/19/22",
      leadTime: "3 days",
      type: "C",
      status: "Closed",
    },
  ];
  

  return (
    <Box p={6} bg="gray.50" minH="100vh">
      <Flex justify="space-between" align="center" mb={6}>
        <Heading size="lg">Dashboard</Heading>
        <Button colorScheme="blue">- delete user</Button>
      </Flex>

      <Flex gap={6} mb={6}>
        <Box flex="1" p={4} bg="white" shadow="md" borderRadius="md">
          <Text fontSize="lg" fontWeight="bold">
            Village Users
          </Text>
          <Stack spacing={2} mt={4}>
            <Text>Number of users</Text>
            <Text>Number of admins</Text>
            <Text>Number of verified users</Text>
          </Stack>
        </Box>
        <Box flex="1" p={4} bg="white" shadow="md" borderRadius="md">
          <Text fontSize="lg" fontWeight="bold">
            Niyani Users
          </Text>
          <Text mt={4}>Number of users</Text>
          <Text>Number of admins</Text>
          <Text>Number of verified users</Text>
        </Box>
      </Flex>

      <Box bg="white" shadow="md" borderRadius="md" p={4}>
  <Flex justify="space-between" align="center" mb={4}>
    <Input placeholder="Search table" maxW="300px" />
    <Flex gap={2}>
      <Select placeholder="Status">
        <option>Verified</option>
        <option>Not Verified</option>
      </Select>
      <Select placeholder="Marital Status">
        <option>Married</option>
        <option>Single</option>
      </Select>
    </Flex>
    <Button colorScheme="blue">+ add new user</Button>
  </Flex>

  <Table variant="simple">
    <Thead bg="gray.100">
      <Tr>
        <Th>
          <Checkbox />
        </Th>
        <Th>Activity/Employee Status</Th>
        <Th>Additional Number</Th>
        <Th>Blood Group</Th>
        <Th>Date of Birth</Th>
        <Th>Education</Th>
        <Th>Education Status</Th>
        <Th>Email</Th>
        <Th>First Name</Th>
        <Th>Family Head</Th>
        <Th>Hobbies</Th>
        <Th>Marital Status</Th>
        <Th>Mobile/WhatsApp Number</Th>
        <Th>Residential Address</Th>
        <Th>State</Th>
        <Th>Village Name</Th>
      </Tr>
    </Thead>
    <Tbody>
      {users.map((user) => (
        <Tr key={user.id}>
          <Td>
            <Checkbox />
          </Td>
          <Td>{user.activityOrEmployeeStatus || "N/A"}</Td>
          <Td>{user.additionalNumber || "N/A"}</Td>
          <Td>{user.bloodGroup}</Td>
          <Td>{new Date(user.dateOfBirth).toLocaleDateString()}</Td>
          <Td>{user.education}</Td>
          <Td>{user.educationStatus}</Td>
          <Td>{user.email}</Td>
          <Td>{user.firstNameOfTheMember}</Td>
          <Td>{user.fullNameOfTheFamilyHead}</Td>
          <Td>{user.hobbies}</Td>
          <Td>{user.maritalStatus}</Td>
          <Td>{user.mobileOrWhatsappNumber}</Td>
          <Td>{user.residentialAddress}</Td>
          <Td>{user.state}</Td>
          <Td>{user.villageName || "N/A"}</Td>
        </Tr>
      ))}
    </Tbody>
  </Table>
</Box>

    </Box>
  );
};

export default Dashboard;
