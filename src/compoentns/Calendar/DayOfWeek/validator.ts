export class WeekValidator {
    static validate(week: unknown): week is string[] {
        if (!Array.isArray(week)) {
            console.error(`[DayOfWeek] "customWeek" must be an array of strings.`);
            return false;
        }

        if (week.length !== 7) {
            console.error(`[DayOfWeek] "customWeek" must have exactly 7 items. Received: ${week.length}`);
            return false;
        }

        if (!week.every((day) => typeof day === 'string')) {
            console.error(`[DayOfWeek] "customWeek" must contain only strings.`);
            return false;
        }

        return true;
    }
}
