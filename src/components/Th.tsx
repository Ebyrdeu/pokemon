import { ThProps } from "@/@types/types";
import { IconChevronDown, IconChevronUp, IconSelector } from "@tabler/icons";
import { Center, Group, Text, UnstyledButton } from "@mantine/core";
import { useThStyles } from "@/styles/th.styles";



const Th = ({ children, reversed, sorted, onSort }: ThProps) => {
	const { classes } = useThStyles();
	const Icon = sorted ? (reversed ? IconChevronUp : IconChevronDown) : IconSelector;
	return (
		<th className={classes.th}>
			<UnstyledButton onClick={onSort} className={classes.control}>
				<Group position="apart">
					<Text weight={500} size="sm">
						{children}
					</Text>
					<Center className={classes.icon}>
						<Icon size={14} stroke={1.5}/>
					</Center>
				</Group>
			</UnstyledButton>
		</th>
	);
};

export default Th;
