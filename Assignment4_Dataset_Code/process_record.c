#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <sys/time.h>

#include "record.h"

void print_message(message_t *message);

int main(int argc, char **argv)
{
    int i;
    /* print usage if needed */
    if (argc != 3)
    {
        fprintf(stderr, "Usage: %s first_record_id last_record_id\n", argv[0]);
        exit(0);
    }

    /* first and last record ids */
    int first_record_id = atoi(argv[1]);
    int last_record_id = atoi(argv[2]);

    // Initialize the user csv file and create the columns
    FILE *user_csv;

    char *user_filename = "user.csv";

    user_csv = fopen(user_filename, "w+");

    fprintf(user_csv, "User ID, User Name, User Location");
    // ---------------------------------------------------
    // Initialize the message csv file and create the columns
    FILE *message_csv;

    char *message_filename = "message.csv";

    message_csv = fopen(message_filename, "w+");

    fprintf(message_csv, "Message ID, Send Date, Send Time, Send Text, User ID");

    // ------------------------------------------------------

    char filename[1024];
    FILE *fp = NULL;

    struct timeval time_start, time_end;

    /* start time */
    gettimeofday(&time_start, NULL);

    int message_id = 0;

    for (i = first_record_id; i <= last_record_id; i++)
    {
        /* open the corresponding file */
        sprintf(filename, "record_%06d.dat", i);

        fp = fopen(filename, "rb");

        if (!fp)
        {
            fprintf(stderr, "Cannot open %s\n", filename);
            continue;
        }

        /* read the record from the file */
        record_t *rp = read_record(fp);

        /* =========== start of data processing code ================ */
        int x;

        /* record cannot be NULL */
        if (rp == NULL)
        {
            fprintf(stderr, "The record is NULL\n");
            exit(0);
        }

        // INFO FOR USER TABLE
        /* user id */
        int id = rp->id;
        /* user name */
        char *name = rp->name;
        /* user location */
        char *location = rp->location;

        // Remove unneeded trailing characters from location
        location[strlen(location) - 1] = '\0';
        location[strlen(location) - 1] = '\0';

        fprintf(user_csv, "\n%d, %s, \"%s\"", id, name, location);

        // --------------------

        // INFO FOR MESSAGE TABLE
        /* print message if the message number is greater than 0 */
        for (x = 0; x < rp->message_num; x++)
        {
            message_t *message = &(rp->messages[x]);
            char message_text[TEXT_LONG];
            strcpy(message_text, message->text);
            // Remove unneeded trailing space from the text
            message_text[strlen(message_text) - 1] = '\0';

            // Add the message to the csv with the message time, text, and user id
            fprintf(message_csv, "\n%d, %02d-%02d-%04d, %02d:%02d, \"%s\", %d", message_id, message->month, message->day,
                    message->year, message->hour, message->minute, message_text, id);
            message_id += 1;
        }

        // print_record(rp);

        /* =========== end of data processing code ================ */

        /* free memory */
        free_record(rp);

        /* close the file */
        fclose(fp);
    }
    fclose(user_csv);
    fclose(message_csv);

    /* end time */
    gettimeofday(&time_end, NULL);

    float totaltime = (time_end.tv_sec - time_start.tv_sec) + (time_end.tv_usec - time_start.tv_usec) / 1000000.0f;

    printf("Process time %f seconds\n", totaltime);

    return 0;
}
