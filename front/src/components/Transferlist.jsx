import { useEffect, useState } from "react";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { MoveDown, MoveLeft, MoveRight, MoveUp } from "lucide-react";
import useScreenSize from "../hooks/useScreenSize";
import { cn } from "../lib/utils";
import { DgtTypography } from "./Typography";

const TransferList = ({
  initialLeft = [],
  initialRight = [],
  onChange,
  title,
}) => {
  const [leftList, setLeftList] = useState(initialLeft);
  const [rightList, setRightList] = useState(initialRight);
  const [selectedLeft, setSelectedLeft] = useState({});
  const [selectedRight, setSelectedRight] = useState({});
  const [searchLeft, setSearchLeft] = useState("");
  const [searchRight, setSearchRight] = useState("");
  const screenSize = useScreenSize();

  useEffect(() => {
    // Verifica si estamos en modo de edición
    const isEditMode = initialLeft.length > 0 && initialRight.length > 0;

    // Verifica si estamos en modo de creación
    const isCreateMode = initialLeft.length > 0 && initialRight.length === 0;

    if (isEditMode && (leftList.length === 0 || rightList.length === 0)) {
      // Los elementos en initialRight van directamente a rightList.
      setRightList(initialRight);

      // Filtramos los elementos de initialLeft que también estén en initialRight.
      const filteredLeft = initialLeft.filter(
        (leftItem) =>
          !initialRight.some((rightItem) => rightItem.id === leftItem.id)
      );
      setLeftList(filteredLeft);
    } else if (isCreateMode && leftList.length === 0) {
      setLeftList(initialLeft);
    }
  }, [initialLeft, initialRight]);

  const filteredLeft = leftList.filter((item) =>
    item.name.toLowerCase().includes(searchLeft.toLowerCase())
  );
  const filteredRight = rightList.filter((item) =>
    item.name.toLowerCase().includes(searchRight.toLowerCase())
  );

  const moveToRight = () => {
    const newRightList = [...rightList];
    const newLeftList = leftList.filter((item) => {
      if (selectedLeft[item.id]) {
        const existingItemInRight = newRightList.find((i) => i.id === item.id);

        if (!existingItemInRight) {
          newRightList.push(item);
        }
        return false;
      }
      return true;
    });

    setRightList(newRightList);
    setLeftList(newLeftList);
    setSelectedLeft({});

    if (onChange) {
      onChange(newRightList);
    }
  };

  const moveToLeft = () => {
    const newLeftList = [...leftList];
    const newRightList = rightList.filter((item) => {
      if (selectedRight[item.id]) {
        const existingItemInLeft = newLeftList.find((i) => i.id === item.id);

        if (!existingItemInLeft) {
          newLeftList.push(item);
        }
        return false;
      }
      return true;
    });

    setLeftList(newLeftList);
    setRightList(newRightList);
    setSelectedRight({});

    if (onChange) {
      onChange(newRightList);
    }
  };

  return (
    <div
      className={"flex w-full flex-col gap-2 mt-2 items-center justify-center"}
    >
      <div className={"w-full flex justify-start pl-3 items-center"}>
        <DgtTypography
          size="h6"
          color="primary"
          className="text-gray-500"
          variant="strong"
        >
          {title}:
        </DgtTypography>
      </div>
      <div className="flex space-x-3 flex-wrap items-center gap-2 justify-center">
        <List
          items={filteredLeft}
          selectedItems={selectedLeft}
          setSelectedItems={setSelectedLeft}
          searchValue={searchLeft}
          setSearchValue={setSearchLeft}
        />
        <div className="flex flex-row md:flex-col py-2 gap-2 items-center justify-center">
          <Button
            type="button"
            onClick={moveToRight}
            size="icon"
            variant="ghost"
          >
            {screenSize === "sm" ? (
              <MoveDown size={15} />
            ) : (
              <MoveRight size={15} />
            )}
          </Button>
          <Button
            type="button"
            onClick={moveToLeft}
            size="icon"
            variant="ghost"
          >
            {screenSize === "sm" ? (
              <MoveUp size={15} />
            ) : (
              <MoveLeft size={15} />
            )}
          </Button>
        </div>
        <List
          items={filteredRight}
          selectedItems={selectedRight}
          setSelectedItems={setSelectedRight}
          searchValue={searchRight}
          setSearchValue={setSearchRight}
        />
      </div>
    </div>
  );
};

const List = ({
  items,
  selectedItems,
  setSelectedItems,
  searchValue,
  setSearchValue,
}) => {
  return (
    <div className="border w-auto p-3 gap-3 rounded-md shadow flex flex-col max-h-[350px] min-h-[350px] min-w-[300px]">
      <Input
        type="text"
        placeholder="Buscar..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <Separator />
      <div className="overflow-auto w-full h-full flex flex-col gap-1">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="my-1 flex w-full justify-between gap-3 items-center"
          >
            <div className="flex flex-row items-center justify-center gap-3">
              <Checkbox
                id={item.id.toString()}
                checked={!!selectedItems[item.id]}
                onClick={() => {
                  if (selectedItems[item.id]) {
                    const newSelection = { ...selectedItems };
                    delete newSelection[item.id];
                    setSelectedItems(newSelection);
                  } else {
                    setSelectedItems((prev) => ({
                      ...prev,
                      [item.id]: true,
                    }));
                  }
                }}
              />
              <p
                htmlFor={item.id.toString()}
                className={cn(
                  "text-sm font-medium text-justify",
                  "max-w-[250px]"
                )}
              >
                {item.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransferList;
