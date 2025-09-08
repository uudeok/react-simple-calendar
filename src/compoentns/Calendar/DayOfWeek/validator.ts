export class WeekValidator {
    static validate(week: unknown): asserts week is string[] {
        if (!Array.isArray(week)) {
            throw new Error(`[DayOfWeek] "customWeek" must be an array of strings.`);
        }

        if (week.length !== 7) {
            throw new Error(`[DayOfWeek] "customWeek" must have exactly 7 items. Received: ${week.length}`);
        }

        if (!week.every((day) => typeof day === 'string')) {
            throw new Error(`[DayOfWeek] "customWeek" must contain only strings.`);
        }
    }
}

/**
 * asserts week is string[]
 * User-Defined Type Guard 중 assert 버전
 * 이 함수가 통과되면 week 은 string[] 임을 보장한다
 */
