import { Dropdown, DropdownOption, DropdownOptions, DropdownSelect } from '../../../contexts/DropdownProvider';

type YearDropdownProps = {
    start?: number;
    end?: number;
};

const YearDropdown = ({ start = 1900, end = 2099 }: YearDropdownProps) => {
    const years = Array.from({ length: end - start + 1 }, (_, i) => (start + i).toString());

    return (
        <Dropdown>
            <DropdownSelect placeholder="연도 선택" />
            <DropdownOptions>
                {years.map((year) => (
                    <DropdownOption value={year} key={year} />
                ))}
            </DropdownOptions>
        </Dropdown>
    );
};

export default YearDropdown;
