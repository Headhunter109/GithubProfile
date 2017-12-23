import * as React from "react";
import SearchView from "../views/search";
import CommonFooter from "../common/footer";

interface SearchEntryProps {}

interface SearchEntryState {}

export default class SearchEntry extends React.Component<SearchEntryProps, SearchEntryState> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <SearchView />
                <CommonFooter />
            </>
        );
    }
}
