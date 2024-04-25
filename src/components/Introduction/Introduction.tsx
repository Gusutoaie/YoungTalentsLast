import React from 'react';
import classes from './Introduction.module.css';
import { Paper, Text, Divider,PaperProps,Button} from '@mantine/core';
import IntroductionComponent from '../IntroductionComponent/IntroductionComponent';


interface IntroductionsProps {
    title: string;
}

const Introduction: React.FC<IntroductionsProps> = (title,props: PaperProps) => {
    return (
        <div className={classes.container}>
            <Paper className={classes.paper} radius="md" p="xl" withBorder {...props}>
                <Text size="lg" fw={500}>Introductions</Text>

                <div className={classes.header}>
                    <Button type="submit" radius="xl">New topic</Button>
                </div>

                <Divider my="lg" />
                <IntroductionComponent />
                <IntroductionComponent />
                <IntroductionComponent />
                <IntroductionComponent />
            </Paper>
        </div>
    );
}

export default Introduction;