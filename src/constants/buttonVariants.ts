import { Variant } from '../components/Button';
import ButtonVariant from '../types/ButtonVariant';

const buttonVariants: ButtonVariant[] = [
    { variant: Variant.PRIMARY, label: 'Primary Button' },
    { variant: Variant.PRIMARY_SMALL, label: 'Primary Small Button' },
    { variant: Variant.PRIMARY_WITH_ICON, label: 'Primary with Icon' },
    { variant: Variant.PRIMARY_LARGE_WITH_ICON, label: 'Primary Large with Icon' },
    { variant: Variant.SECONDARY_OUTLINED, label: 'Secondary Outlined' },
    { variant: Variant.SECONDARY_OUTLINED_SMALL, label: 'Secondary Outlined Small' },
    { variant: Variant.SECONDARY_OUTLINED_WITH_ICON, label: 'Secondary Outlined with Icon' },
    { variant: Variant.SECONDARY_LARGE_OUTLINED_WITH_ICON, label: 'Secondary Large Outlined with Icon' },
    { variant: Variant.SECONDARY_OUTLINED_ONLY_ICON, label: 'Secondary Outlined Only Icon' },
    { variant: Variant.SECONDARY_SMALL, label: 'Secondary Small Button' },
    { variant: Variant.SECONDARY_WITH_ICON, label: 'Secondary with Icon' },
    { variant: Variant.SECONDARY_ONLY_ICON, label: 'Secondary Only Icon' },
  ];
export default buttonVariants;
