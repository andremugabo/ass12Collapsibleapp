import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Accordion = () => {
  const [expanded, setExpanded] = useState(false);

  // Function to handle expanding/collapsing the content
  const toggleAccordion = () => {
    setExpanded(!expanded);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleAccordion} style={styles.header}>
        <Text style={styles.headerText}>Accordion Header</Text>
        <FontAwesomeIcon
          icon={expanded ? faChevronUp : faChevronDown}
          size={20}
          style={styles.icon}
        />
      </TouchableOpacity>

      {expanded && (
        <View style={styles.content}>
          <Text style={styles.contentText}>Accordion Content</Text>
        </View>
      )}
    </View>
  );
};

const styles = {
  container: {
    borderWidth: 1,
    borderColor: "#DDDDDD",
    borderRadius: 8,
    marginBottom: 16,
    overflow: "hidden",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: "#F5F5F5",
  },
  headerText: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
  },
  icon: {
    color: "#888888",
  },
  content: {
    padding: 16,
    backgroundColor: "#FFFFFF",
  },
  contentText: {
    fontSize: 16,
  },
};

export default Accordion;
