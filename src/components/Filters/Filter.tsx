import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select"

const Filter = ({ criteria }: { criteria: string }) => {

  return (
    <div className="flex items-center space-x-2">
      <p>Filter by {criteria}</p>
      <NativeSelect>
        <NativeSelectOption value="">All</NativeSelectOption>
      </NativeSelect>
    </div>
  );

}

export default Filter;
