import { SampleBasic } from './ui/SampleBasic'
import { SampleDisable } from './ui/SampleDisable'
import { SampleInlinePreview } from './ui/SampleInlinePreview'
import { SampleList } from './ui/SampleList'
import { SampleMultiUser } from './ui/SampleMultiUser'

export const dataPeoplePickers = [
  {
    title: 'Basic Usage',
    ui: <SampleBasic />,
    code: `import * as React from "react";
    import { Stack, IPersonaProps, IBasePickerSuggestionsProps, CompactPeoplePicker, IBasePickerStyles } from "@gui/fluent-ui-allure";
    
    const demoImageUrl = "https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/persona-female.png";
    export const suggestionProps: IBasePickerSuggestionsProps = {
        suggestionsHeaderText: "Suggested People",
        mostRecentlyUsedHeaderText: "Suggested Contacts",
        noResultsFoundText: "No results found",
        loadingText: "Loading",
        showRemoveButtons: true,
        suggestionsAvailableAlertText: "People Picker Suggestions available",
        suggestionsContainerAriaLabel: "Suggested contacts",
    };
    
    const list: IPersonaProps[] = [
        {
            text: "Will Wang",
            imageUrl: demoImageUrl,
            secondaryText: "will.wang@avepoint.com",
        },
        {
            text: "Lily Wang",
            imageUrl: demoImageUrl,
            secondaryText: "Lily.wang@avepoint.com",
        },
        {
            text: "Ming Hong",
            imageUrl: demoImageUrl,
            secondaryText: "Ming.hong@avepoint.com",
        },
        {
            text: "Anne Wang",
            imageUrl: demoImageUrl,
            secondaryText: "Anne.wang@avepoint.com",
        },
        {
            text: "Angle Kolar",
            imageUrl: demoImageUrl,
            secondaryText: "Angle.Kolar@avepoint.com",
        },
        {
            text: "Bob Lu",
            imageUrl: demoImageUrl,
            secondaryText: "Bob.lu@avepoint.com",
        },
        {
            text: "Joy Li",
            imageUrl: demoImageUrl,
            secondaryText: "Joy.Li@avepoint.com",
        },
        {
            text: "Aaron Reid",
            imageUrl: demoImageUrl,
            secondaryText: "Aaron.Reid@avepoint.com",
        },
        {
            text: "Alex Lundberg",
            imageUrl: demoImageUrl,
            secondaryText: "Alex.Lundberg@avepoint.com",
        },
    ];
    
    export const SampleBasic = () => {
        const styles: Partial<IBasePickerStyles> = { root: { width: 280 } };
    
        const onFilterChanged = (filterText: string, currentPersonas: IPersonaProps[], limitResults?: number): IPersonaProps[] | Promise<IPersonaProps[]> => {
            filterText = filterText.toLocaleLowerCase();
            if (filterText) {
                let filteredPersonas: IPersonaProps[] = list.filter((item) => (item.text as string).toLowerCase().indexOf(filterText.toLowerCase()) === 0);
                filteredPersonas = filteredPersonas.filter((persona) => !listContainsPersona(persona, currentPersonas));
                filteredPersonas = limitResults ? filteredPersonas.slice(0, limitResults) : filteredPersonas;
                return filteredPersonas;
            } else {
                return [];
            }
        };
    
        function listContainsPersona(persona: IPersonaProps, personas: IPersonaProps[]) {
            if (!personas || !personas.length || personas.length === 0) {
                return false;
            }
            return personas.filter((item) => item.text === persona.text).length > 0;
        }
    
        return (
            <Stack horizontal tokens={{ childrenGap: 16 }}>
                <CompactPeoplePicker
                    onResolveSuggestions={onFilterChanged}
                    pickerSuggestionsProps={suggestionProps}
                    styles={styles}
                    defaultSelectedItems={[list[0]]}
                    itemLimit={1}
                    pickerCalloutProps={{ calloutWidth: 280 }}
                />
            </Stack>
        );
    };`
  },
  {
    title: 'Multi-user',
    ui: <SampleMultiUser />,
    code: `import * as React from "react";
    import { Stack, IPersonaProps, IBasePickerSuggestionsProps, CompactPeoplePicker, IBasePickerStyles } from "@gui/fluent-ui-allure";
    
    const demoImageUrl = "https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/persona-female.png";
    export const suggestionProps: IBasePickerSuggestionsProps = {
        suggestionsHeaderText: "Suggested People",
        mostRecentlyUsedHeaderText: "Suggested Contacts",
        noResultsFoundText: "No results found",
        loadingText: "Loading",
        showRemoveButtons: true,
        suggestionsAvailableAlertText: "People Picker Suggestions available",
        suggestionsContainerAriaLabel: "Suggested contacts",
    };
    
    const list: IPersonaProps[] = [
        {
            text: "Will Wang",
            imageUrl: demoImageUrl,
            secondaryText: "will.wang@avepoint.com",
        },
        {
            text: "Lily Wang",
            imageUrl: demoImageUrl,
            secondaryText: "Lily.wang@avepoint.com",
        },
        {
            text: "Ming Hong",
            imageUrl: demoImageUrl,
            secondaryText: "Ming.hong@avepoint.com",
        },
        {
            text: "Anne Wang",
            imageUrl: demoImageUrl,
            secondaryText: "Anne.wang@avepoint.com",
        },
        {
            text: "Angle Kolar",
            imageUrl: demoImageUrl,
            secondaryText: "Angle.Kolar@avepoint.com",
        },
        {
            text: "Bob Lu",
            imageUrl: demoImageUrl,
            secondaryText: "Bob.lu@avepoint.com",
        },
        {
            text: "Joy Li",
            imageUrl: demoImageUrl,
            secondaryText: "Joy.Li@avepoint.com",
        },
        {
            text: "Aaron Reid",
            imageUrl: demoImageUrl,
            secondaryText: "Aaron.Reid@avepoint.com",
        },
        {
            text: "Alex Lundberg",
            imageUrl: demoImageUrl,
            secondaryText: "Alex.Lundberg@avepoint.com",
        },
    ];
    
    export const SampleMultiUser = () => {
        const styles: Partial<IBasePickerStyles> = { root: { width: 900 } };
        const [mostRecentlyUsed, setMostRecentlyUsed] = React.useState<IPersonaProps[]>([]);
        const [peopleList, setPeopleList] = React.useState<IPersonaProps[]>(list);
    
        const picker = React.useRef(null);
    
        const onFilterChanged = (filterText: string, currentPersonas: IPersonaProps[], limitResults?: number): IPersonaProps[] | Promise<IPersonaProps[]> => {
            filterText = filterText.toLocaleLowerCase();
            if (filterText) {
                let filteredPersonas: IPersonaProps[] = list.filter((item) => (item.text as string).toLowerCase().indexOf(filterText.toLowerCase()) === 0);
                filteredPersonas = filteredPersonas.filter((persona) => !listContainsPersona(persona, currentPersonas));
                filteredPersonas = limitResults ? filteredPersonas.slice(0, limitResults) : filteredPersonas;
                return filteredPersonas;
            } else {
                return [];
            }
        };
    
        function listContainsPersona(persona: IPersonaProps, personas: IPersonaProps[]) {
            if (!personas || !personas.length || personas.length === 0) {
                return false;
            }
            return personas.filter((item) => item.text === persona.text).length > 0;
        }
        return (
            <Stack horizontal tokens={{ childrenGap: 16 }}>
                <CompactPeoplePicker
                    onResolveSuggestions={onFilterChanged}
                    pickerSuggestionsProps={suggestionProps}
                    componentRef={picker}
                    styles={styles}
                    defaultSelectedItems={[peopleList[0], peopleList[1]]}
                />
            </Stack>
        );
    };`
  },
  {
    title: 'List',
    ui: <SampleList />,
    code: `import * as React from "react";
    import { IPersonaProps, ListPeoplePicker, IBasePickerStyles, IBasePickerSuggestionsProps } from "@gui/fluent-ui-allure";
    
    const demoImageUrl = "https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/persona-female.png";
    export const suggestionProps: IBasePickerSuggestionsProps = {
        suggestionsHeaderText: "Suggested People",
        mostRecentlyUsedHeaderText: "Suggested Contacts",
        noResultsFoundText: "No results found",
        loadingText: "Loading",
        showRemoveButtons: true,
        suggestionsAvailableAlertText: "People Picker Suggestions available",
        suggestionsContainerAriaLabel: "Suggested contacts",
    };
    
    const list: IPersonaProps[] = [
        {
            text: "Will Wang",
            imageUrl: demoImageUrl,
            secondaryText: "will.wang@avepoint.com",
        },
        {
            text: "Lily Wang",
            imageUrl: demoImageUrl,
            secondaryText: "Lily.wang@avepoint.com",
        },
        {
            text: "Ming Hong",
            imageUrl: demoImageUrl,
            secondaryText: "Ming.hong@avepoint.com",
        },
        {
            text: "Anne Wang",
            imageUrl: demoImageUrl,
            secondaryText: "Anne.wang@avepoint.com",
        },
        {
            text: "Angle Kolar",
            imageUrl: demoImageUrl,
            secondaryText: "Angle.Kolar@avepoint.com",
        },
        {
            text: "Bob Lu",
            imageUrl: demoImageUrl,
            secondaryText: "Bob.lu@avepoint.com",
        },
        {
            text: "Joy Li",
            imageUrl: demoImageUrl,
            secondaryText: "Joy.Li@avepoint.com",
        },
        {
            text: "Aaron Reid",
            imageUrl: demoImageUrl,
            secondaryText: "Aaron.Reid@avepoint.com",
        },
        {
            text: "Alex Lundberg",
            imageUrl: demoImageUrl,
            secondaryText: "Alex.Lundberg@avepoint.com",
        },
    ];
    
    export const SampleList: React.FunctionComponent = () => {
        const [selected, setSelected] = React.useState<number>(2);
        const styles: Partial<IBasePickerStyles> = { outer: { width: 280 } };
    
        const onFilterChanged = (filterText: string, currentPersonas: IPersonaProps[], limitResults?: number): IPersonaProps[] | Promise<IPersonaProps[]> => {
            filterText = filterText.toLocaleLowerCase();
            if (filterText) {
                let filteredPersonas: IPersonaProps[] = list.filter((item) => (item.text as string).toLowerCase().indexOf(filterText.toLowerCase()) === 0);
                filteredPersonas = filteredPersonas.filter((persona) => !listContainsPersona(persona, currentPersonas));
                filteredPersonas = limitResults ? filteredPersonas.slice(0, limitResults) : filteredPersonas;
                return filteredPersonas;
            } else {
                return [];
            }
        };
    
        function listContainsPersona(persona: IPersonaProps, personas: IPersonaProps[]) {
            if (!personas || !personas.length || personas.length === 0) {
                return false;
            }
            return personas.filter((item) => item.text === persona.text).length > 0;
        }
    
        return (
            <div>
                <ListPeoplePicker
                    onResolveSuggestions={onFilterChanged}
                    pickerSuggestionsProps={suggestionProps}
                    resolveDelay={300}
                    defaultSelectedItems={[list[0], list[1]]}
                    styles={styles}
                    selectedItemsText={\`\${selected || 0} users selected\`}
                    onChange={(items) => setSelected(items.length || 0)}
                    calloutWidth={280}
                    pickerCalloutProps={{ calloutWidth: 280 }}
                />
            </div>
        );
    };`
  },
  {
    title: 'Inline preview',
    ui: <SampleInlinePreview />,
    code: `import * as React from "react";
    import { IPersonaProps, IBasePickerSuggestionsProps, IBasePickerStyles, ListPeoplePicker } from "@gui/fluent-ui-allure";
    
    const demoImageUrl = "https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/persona-female.png";
    export const suggestionProps: IBasePickerSuggestionsProps = {
        suggestionsHeaderText: "Suggested People",
        mostRecentlyUsedHeaderText: "Suggested Contacts",
        noResultsFoundText: "No results found",
        loadingText: "Loading",
        showRemoveButtons: true,
        suggestionsAvailableAlertText: "People Picker Suggestions available",
        suggestionsContainerAriaLabel: "Suggested contacts",
    };
    
    const list: IPersonaProps[] = [
        {
            text: "Will Wang",
            imageUrl: demoImageUrl,
            secondaryText: "will.wang@avepoint.com",
        },
        {
            text: "Lily Wang",
            imageUrl: demoImageUrl,
            secondaryText: "Lily.wang@avepoint.com",
        },
        {
            text: "Ming Hong",
            imageUrl: demoImageUrl,
            secondaryText: "Ming.hong@avepoint.com",
        },
        {
            text: "Anne Wang",
            imageUrl: demoImageUrl,
            secondaryText: "Anne.wang@avepoint.com",
        },
        {
            text: "Angle Kolar",
            imageUrl: demoImageUrl,
            secondaryText: "Angle.Kolar@avepoint.com",
        },
        {
            text: "Bob Lu",
            imageUrl: demoImageUrl,
            secondaryText: "Bob.lu@avepoint.com",
        },
        {
            text: "Joy Li",
            imageUrl: demoImageUrl,
            secondaryText: "Joy.Li@avepoint.com",
        },
        {
            text: "Aaron Reid",
            imageUrl: demoImageUrl,
            secondaryText: "Aaron.Reid@avepoint.com",
        },
        {
            text: "Alex Lundberg",
            imageUrl: demoImageUrl,
            secondaryText: "Alex.Lundberg@avepoint.com",
        },
    ];
    
    export const SampleInlinePreview: React.FunctionComponent = () => {
        const styles: Partial<IBasePickerStyles> = { outer: { width: 280 } };
        const [selected, setSelected] = React.useState<IPersonaProps[]>(list.slice(0, 8));
    
        const onFilterChanged = (filterText: string, currentPersonas: IPersonaProps[], limitResults?: number): IPersonaProps[] | Promise<IPersonaProps[]> => {
            filterText = filterText.toLocaleLowerCase();
            if (filterText) {
                let filteredPersonas: IPersonaProps[] = list.filter((item) => (item.text as string).toLowerCase().indexOf(filterText.toLowerCase()) === 0);
                filteredPersonas = filteredPersonas.filter((persona) => !listContainsPersona(persona, currentPersonas));
                filteredPersonas = limitResults ? filteredPersonas.slice(0, limitResults) : filteredPersonas;
                return filteredPersonas;
            } else {
                return [];
            }
        };
    
        function listContainsPersona(persona: IPersonaProps, personas: IPersonaProps[]) {
            if (!personas || !personas.length || personas.length === 0) {
                return false;
            }
            return personas.filter((item) => item.text === persona.text).length > 0;
        }
    
        return (
            <div>
                <ListPeoplePicker
                    onResolveSuggestions={onFilterChanged}
                    pickerSuggestionsProps={suggestionProps}
                    resolveDelay={300}
                    styles={styles}
                    maxDisplayablePersonas={5}
                    defaultSelectedItems={list.slice(0, 4)}
                    isInlinePreview
                    selectedItems={selected}
                    selectedItemsText={\`\${selected.length || 0} users selected\`}
                    pickerCalloutProps={{ calloutWidth: 280 }}
                    onChange={(items?: IPersonaProps[]) => setSelected(items)}
                    calloutWidth={280}
                    id={"people-picker-callout"}
                    onCalloutButtonClick={(i) => setSelected(selected.filter((j) => i.text !== j.text))}
                />
            </div>
        );
    };`
  },
  {
    title: 'Disable',
    ui: <SampleDisable />,
    code: `import * as React from "react";
    import { Stack, IPersonaProps, CompactPeoplePicker, IBasePickerStyles } from "@gui/fluent-ui-allure";
    import { suggestionProps } from "./SampleBasic";
    
    const demoImageUrl = "https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/persona-female.png";
    const persona: IPersonaProps = {
        text: "Will Wang",
        imageUrl: demoImageUrl,
        secondaryText: "will.wang@avepoint.com",
    };
    export const SampleDisable = () => {
        const styles: Partial<IBasePickerStyles> = { root: { width: 280 } };
    
        return (
            <Stack horizontal tokens={{ childrenGap: 16 }}>
                <CompactPeoplePicker
                    onResolveSuggestions={() => []}
                    pickerSuggestionsProps={suggestionProps}
                    styles={styles}
                    inputProps={{
                        placeholder: "Search Users...",
                    }}
                    disabled
                />
                <CompactPeoplePicker
                    onResolveSuggestions={() => []}
                    pickerSuggestionsProps={suggestionProps}
                    styles={styles}
                    inputProps={{
                        placeholder: "Search Users...",
                    }}
                    disabled
                    defaultSelectedItems={[persona]}
                    itemLimit={1}
                />
            </Stack>
        );
    };`
  }
]
