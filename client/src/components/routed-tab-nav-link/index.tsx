import { Box, TabNav, Text } from "@radix-ui/themes";
import { NavLink, useLocation } from "react-router-dom";

export const RoutedTabNavLink = ({ href, text }: { href: string, text: string} ) => {
    const { pathname } = useLocation();
    const active = pathname === href;
    const weight = active ? "bold" : "regular";

    return (
        <Box asChild px="2">
            <TabNav.Link asChild href={href} active={active}>
                <NavLink to={href}>
                    <Text size="2" weight={weight} >
                        {text}
                    </Text>
                </NavLink>
            </TabNav.Link>
        </Box>
    );
};