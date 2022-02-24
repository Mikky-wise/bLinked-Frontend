export const filterAgents = (agents, search, filter) => {
    if (search === '' && filter === 'All') return agents;
    if (search !== '' && filter === 'All') {
        return agents.filter(row => (
            row.agentName?.toLowerCase().includes(search.toLowerCase()) ||
            row.location?.toLowerCase().includes(search.toLowerCase()) ||
            row.revenue?.toLowerCase().includes(search.toLowerCase()) ||
            row.orders?.toLowerCase().includes(search.toLowerCase())
        ));
    };
    if (search === '' && filter !== 'All') {
        return agents.filter(row => row.status.toLowerCase() === filter.toLowerCase());
    };
    if (search !== '' && filter !== 'All') {
        return agents.filter(row => (
            (row.agentName?.toLowerCase().includes(search.toLowerCase()) ||
                row.location?.toLowerCase().includes(search.toLowerCase()) ||
                row.revenue?.toLowerCase().includes(search.toLowerCase()) ||
                row.orders?.toLowerCase().includes(search.toLowerCase())) &&
            row.status.toLowerCase() === filter.toLowerCase()
        ));
    };
};