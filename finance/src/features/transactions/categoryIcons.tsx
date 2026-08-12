import {
	IconShoppingCart,
	IconBus,
	IconHome,
	IconMovie,
	IconHeart,
	IconShirt,
	IconPhone,
	IconSchool,
	IconDots,
	IconMoneybagPlus,
	IconReceipt,
	type Icon,
} from "@tabler/icons-react";

const CATEGORY_ICONS: Record<string, Icon> = {
	Еда: IconShoppingCart,
	Транспорт: IconBus,
	Жильё: IconHome,
	Развлечения: IconMovie,
	Здоровье: IconHeart,
	Одежда: IconShirt,
	Связь: IconPhone,
	Образование: IconSchool,
	Прочее: IconDots,
	Доход: IconMoneybagPlus,
};

const DEFAULT_ICON = IconReceipt;

export const getCategoryIcon = (category: string): Icon => {
	return CATEGORY_ICONS[category] ?? DEFAULT_ICON;
};
